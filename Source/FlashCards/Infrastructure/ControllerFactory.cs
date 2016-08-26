namespace Tft.FlashCards.Infrastructure
{
	using System;
	using System.Web.Mvc;
	using System.Web.Mvc.Async;
	using System.Web.Routing;

	public class ControllerFactory : DefaultControllerFactory
	{
    const string BaseFeatureNamespace = "Tft.FlashCards.Features";
		const string FeatureControllerName = "FeatureController";
		const string FeatureControllerActionName = "Action";

		protected override Type GetControllerType(RequestContext aRequestContext, string aFeatureName)
		{
			string action = aRequestContext.RouteData.GetRequiredString(valueName: "action");
			string typeName = $"{BaseFeatureNamespace}.{aFeatureName}.{action}+{FeatureControllerName}";

			System.Reflection.Assembly assembly = typeof(ControllerFactory).Assembly;
			Type type = assembly.GetType(typeName);
      if (type == null)
      {
        type = base.GetControllerType(aRequestContext, aFeatureName);
      }

			return type;
		}

		public override IController CreateController(RequestContext aRequestContext, string aControllerName)
		{
			IController controller = base.CreateController(aRequestContext, aControllerName);
			return ReplaceActionInvoker(controller);
		}

		private IController ReplaceActionInvoker(IController aController)
		{
			var mvcController = aController as Controller;
			if (mvcController != null)
			{
				mvcController.ActionInvoker = new FeatureActionInvoker();
			}

			return aController;
		}

		public class FeatureActionInvoker : AsyncControllerActionInvoker
		{
			protected override ActionDescriptor FindAction(ControllerContext aControllerContext, ControllerDescriptor aControllerDescriptor, string aActionName)
			{
				return base.FindAction(aControllerContext, aControllerDescriptor, actionName: FeatureControllerActionName);
			}
		}
	}
}
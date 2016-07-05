namespace Tft.FlashCards
{
  using Configuration;
  using Entities;
  using Infrastructure;
  using System.Data.Entity;
  using System.Web.Mvc;
  using System.Web.Routing;

  public class MvcApplication : System.Web.HttpApplication
  {
    protected void Application_Start()
    {
      AreaRegistration.RegisterAllAreas();
      RouteConfig.RegisterRoutes(RouteTable.Routes);

      // Replace Default ViewEngine with Feature version
      ViewEngines.Engines.Clear();
      ViewEngines.Engines.Add(new FeatureRazorViewEngine());

      //Replace Default Controller factor with Feature version
      //ControllerBuilder.Current.SetControllerFactory(new ControllerFactory());

      // Set Database Initializer
      Database.SetInitializer<FlashCardDbContext>(new ModelInitializer());

      IDatabaseSettings databaseSettings = DependencyResolution.Ioc.Container.GetInstance<IDatabaseSettings>();

      using (var flashCardDbContext = new FlashCardDbContext(databaseSettings))
      {
        flashCardDbContext.Database.Initialize(force: false);
      }
    }
  }
}

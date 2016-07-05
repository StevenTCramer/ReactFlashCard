namespace Tft.FlashCards.Infrastructure
{
	using System.Web.Mvc;

	public class FeatureRazorViewEngine : RazorViewEngine
	{
		public FeatureRazorViewEngine()
		{
			ViewLocationFormats = new[]
			{
				"~/Features/{1}/{0}.cshtml",
				"~/Features/{1}/{0}.vbhtml",
				"~/Features/Shared/{0}.cshtml",
				"~/Features/Shared/{0}.vbhtml",
			};

			MasterLocationFormats = ViewLocationFormats;
			PartialViewLocationFormats = ViewLocationFormats;
		}
	}
}
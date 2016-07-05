namespace Tft.FlashCards.Features.FlashCardApplicationPage
{
	using System.Web.Mvc;
	public class FlashCardApplicationPage
	{
		public class FeatureController : Controller
		{
			[HttpGet]
			public ActionResult Action()
			{
				return View();
			}
		}
	}
}
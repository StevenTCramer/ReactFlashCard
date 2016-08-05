namespace Tft.FlashCards.Features.TestPage
{
  using System.Web.Mvc;
  public class TestPage
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
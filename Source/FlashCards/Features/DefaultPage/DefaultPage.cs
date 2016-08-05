namespace Tft.FlashCards.Features.DefaultPage
{
  using System.Web.Mvc;
  public class DefaultPage
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
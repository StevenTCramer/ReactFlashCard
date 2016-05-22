namespace HelloWorld.Controllers
{
	using System.Web.Mvc;

	public class HelloWorldController : Controller
	{
		// GET: HelloWorld
		public ActionResult Index()
		{
			return View();
		}
	}
}
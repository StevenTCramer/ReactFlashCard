namespace Tft.FlashCards.Infrastructure.MediatedControllers
{

  using System.Threading.Tasks;
  using System.Web.Mvc;
  using MediatR;

  public class MediatedAsyncGetController<TQuery, TResult> : MediatedController
  where TQuery : IAsyncRequest<TResult>
  {
    public MediatedAsyncGetController(IMediator aMediator) : base(aMediator) { }

    public virtual async Task<ActionResult> Action(TQuery aQuery)
    {
      TResult result = await Mediator.SendAsync(aQuery);

      if (result == null)
      {
        return HttpNotFound();
      }

      if (Request.IsAjaxRequest())
      {
        return PartialView(result);
      }
      else
      {
        return View(result);
      }
    }
  }
}
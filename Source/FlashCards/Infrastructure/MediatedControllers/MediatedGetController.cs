namespace Tft.FlashCards.Infrastructure.MediatedControllers
{
  using System.Web.Mvc;
  using MediatR;

  public class MediatedGetController<TQuery, TResult> : MediatedController
  where TQuery : IRequest<TResult>
  {
    public MediatedGetController(IMediator aMediator) : base(aMediator) { }


    public virtual ActionResult Action(TQuery aQuery)
    {
      TResult result = Mediator.Send(aQuery);

      if (result == null)
      {
        return HttpNotFound();
      }

      return View(result);
    }
  }
}
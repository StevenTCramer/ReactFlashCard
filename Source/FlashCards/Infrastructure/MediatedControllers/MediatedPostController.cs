//namespace Tft.FlashCards.Infrastructure.MediatedControllers
//{
//  using System;
//  using System.Web.Mvc;
//  using MediatR;
//  using Extensions;

//  public class MediatedPostController<TCommand, TRedirectController> : MediatedController
//      where TCommand : IRequest
//      where TRedirectController : Controller
//  {
//    public MediatedGetPostController(IMediator aMediator) : base(aMediator) { }

//    [HttpPost]
//    [ValidateAntiForgeryToken]
//    public virtual ActionResult Action(TCommand aCommand)
//    {
//      Mediator.Send(aCommand);

//      if (redirectTarget != null && !String.IsNullOrWhiteSpace(redirectTarget.RedirectUrl))
//        return this.RedirectToFeatureJson<TRedirectController>(redirectTarget.RedirectUrl);
//      else
//        return this.RedirectToFeatureJson<TRedirectController>();

//    }
//  }
//}
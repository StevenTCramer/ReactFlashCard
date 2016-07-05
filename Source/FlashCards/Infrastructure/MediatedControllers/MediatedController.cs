namespace Tft.FlashCards.Infrastructure.MediatedControllers
{
  using MediatR;

  public class MediatedController : BaseController
  {
    protected IMediator Mediator { get; }

    public MediatedController(IMediator aMediator)
    {
      Mediator = aMediator;
    }
  }
}
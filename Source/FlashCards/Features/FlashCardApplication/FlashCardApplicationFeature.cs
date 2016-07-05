namespace Tft.FlashCards.Features.FlashCardApplication
{
  using MediatR;
  using System.Collections.Generic;
  using System.Threading.Tasks;
  using System.Web.Mvc;
  using AutoMapper;
  using Entities;
  using Infrastructure.MediatedControllers;
  using Infrastructure.RequestHandlers;
  using System;
  using Mehdime.Entity;
  using System.Linq;
  public class FlashCardApplicationFeature
  {
    public class GetQuery : IRequest<GetResult> { }

    public class GetResult
    {
      //public Entities.FlashCardApplication FlashCardApplication { get; set; }
      public FlashCardApplication FlashCardApplication { get; set; }
    }

    public class FlashCardApplication : Entity
    {
      //public FlashCardApplication()
      //{
      //  FlashDecks = new List<FlashDeck>();
      //  FactoidCategories = new List<FactoidCategory>();
      //  FlashCardPlayerOptionsList = new List<FlashCardPlayerOptions>();
      //}

      public string Name { get; set; }
      public virtual List<FlashCardPlayerOptions> FlashCardPlayerOptionsList { get; set; }
      public virtual List<FlashDeck> FlashDecks { get; set; }
      public virtual List<FactoidCategory> FactoidCategories { get; set; }
    }

    public class FactoidCategory : Entity
    {
      public string Description { get; set; }
    }

    public class FlashDeck : Entity
    {
      public string Name { get; set; }
      public virtual List<FlashCard> FlashCards { get; set; }
      //public virtual List<FactoidCategory> FactoidCategories { get; set; }
      //public FlashDeck()
      //{
      //  FlashCards = new List<FlashCard>();
      //  FactoidCategories = new List<FactoidCategory>();
      //}
    }

    public class FlashCardPlayerOptions : Entity
    {
      public FlashDeck FlashDeck { get; set; }
      //[Column(name:"testthis")]
      public virtual List<FactoidCategory> DisplayCategories { get; set; }
      public FactoidCategory EvaluationCategory { get; set; }
    }

    public class FlashCard : Entity
    {
      public virtual List<Factoid> Factoids { get; set; }
      //public FlashDeck FlashDeck { get; set; }
      //public Guid FlashDeckGuid { get; set; }

      //public FlashCard()
      //{
      //  Factoids = new List<Factoid>();
      //}
    }

    public class Factoid : Entity
    {
      public FactoidType FactoidType { get; set; }
      public FactoidCategory FactoidCategory { get; set; }
      //public FlashCard FlashCard { get; set; }
      //public Guid FlashCardGuid { get; set; }
      public string Fact { get; set; }
    }

    public class GetHandler : DbContextQueryHandler<GetQuery, GetResult, FlashCardDbContext>
    {

      public GetHandler(IDbContextScopeFactory aDbContextScopeFactory, MapperConfiguration aMapperConfiguration)
        : base(aDbContextScopeFactory, aMapperConfiguration) { }

      protected override GetResult HandleInScope(GetQuery aQuery, FlashCardDbContext aDbContext)
      {
        var getResult = new GetResult();
        //getResult.FlashCardApplication = aDbContext.FlashCardApplications.First();
        getResult.FlashCardApplication = aDbContext.FlashCardApplications.ProjectToFirst<FlashCardApplication>(MapperConfiguration);
        return getResult;
      }
    }

    public class FeatureController : MediatedController
    {
      public FeatureController(IMediator aMediator) : base(aMediator) { }

      [HttpGet]
      public ActionResult Action(GetQuery aQuery)
      {
        GetResult result = Mediator.Send(aQuery);
        return Json(result, JsonRequestBehavior.AllowGet);
      }
    }

    public class MappingProfile : Profile
    {
      protected override void Configure()
      {
        CreateMap<Entities.Factoid, Factoid>().IgnoreAllPropertiesWithAnInaccessibleSetter();
        CreateMap<Entities.FactoidCategory, FactoidCategory>().IgnoreAllPropertiesWithAnInaccessibleSetter();
        CreateMap<Entities.FlashCard, FlashCard>().IgnoreAllPropertiesWithAnInaccessibleSetter();
        CreateMap<Entities.FlashCardApplication, FlashCardApplication>().IgnoreAllPropertiesWithAnInaccessibleSetter();
        CreateMap<Entities.FlashCardPlayerOptions, FlashCardPlayerOptions>().IgnoreAllPropertiesWithAnInaccessibleSetter();
        CreateMap<Entities.FlashDeck, FlashDeck>().IgnoreAllPropertiesWithAnInaccessibleSetter();
      }
    }
  }
}
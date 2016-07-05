namespace Tft.FlashCards.Infrastructure.Mapping
{
  using FluentValidation;
  using MediatR;
  using StructureMap;

  public class FeatureRegistry: Registry
  {
    public FeatureRegistry()
    {
      Scan(aAssemblyScanner =>
      {
        aAssemblyScanner.AssemblyContainingType<IMediator>();
        aAssemblyScanner.AssemblyContainingType<FeatureRegistry>();

        aAssemblyScanner.AddAllTypesOf(typeof(IRequestHandler<,>));
        aAssemblyScanner.AddAllTypesOf(typeof(IAsyncRequestHandler<,>));
        aAssemblyScanner.AddAllTypesOf(typeof(IValidator<>));
        aAssemblyScanner.WithDefaultConventions();
      });

      For<SingleInstanceFactory>().Use<SingleInstanceFactory>(aContext => aType => aContext.GetInstance(aType));
      For<MultiInstanceFactory>().Use<MultiInstanceFactory>(aContext => aType => aContext.GetAllInstances(aType));
    }
  }
}
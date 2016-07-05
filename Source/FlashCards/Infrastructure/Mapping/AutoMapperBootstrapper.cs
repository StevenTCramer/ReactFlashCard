namespace Tft.FlashCards.Infrastructure.Mapping
{
  using System.Collections.Generic;
  using AutoMapper;
  using StructureMap;

  public class AutoMapperBootstrapper
  {
    private static bool initialized;
    private static readonly object containerLock = new object();

    public static void Initialize(IContainer aContainer)
    {
      lock (containerLock)
      {
        if (!initialized)
        {
          InitializeInternal(aContainer);
          initialized = true;
        }
      }
    }

    private static void InitializeInternal(IContainer aContainer)
    {
      //var logger = Logger.Instance;

      //logger.Debug("Initializing Automapper");

      Mapper.Initialize(aConfiguration =>
      {
        var profileNames = new List<string>();
        foreach (var profile in aContainer.GetAllInstances<Profile>())
        {
          profileNames.Add(profile.ProfileName);
          aConfiguration.AddProfile(profile);
        }

        //logger.Verbose("Added profiles: {ProfileName}", profileNames);

        aConfiguration.ConstructServicesUsing(aContainer.GetInstance);
      });
    }
  }
}
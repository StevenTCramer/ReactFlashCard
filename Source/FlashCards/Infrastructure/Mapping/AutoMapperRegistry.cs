namespace Tft.FlashCards.Infrastructure.Mapping
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using AutoMapper;
  using StructureMap;

  public class AutoMapperRegistry : Registry
  {
    public AutoMapperRegistry()
    {
      IEnumerable<Profile> profiles =
          from t in typeof(AutoMapperRegistry).Assembly.GetTypes()
          where typeof(Profile).IsAssignableFrom(t)
          select (Profile) Activator.CreateInstance(t);

      var mapperConfiguration = new MapperConfiguration(cfg =>
        {
          foreach (var profile in profiles)
          {
            cfg.AddProfile(profile);
          }
        });

      For<MapperConfiguration>().Use(mapperConfiguration);
      For<IMapper>().Use(ctx => ctx.GetInstance<MapperConfiguration>().CreateMapper(ctx.GetInstance));
    }
  }
}
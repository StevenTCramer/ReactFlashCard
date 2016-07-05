namespace Tft.FlashCards.Entities
{
  using Configuration;
  using Mehdime.Entity;
  using System;
  using System.Collections.Generic;
  using System.Data.Entity;

  public class FlashCardDbContextFactory: IDbContextFactory
  {
    private IDatabaseSettings DatabaseSettings { get; set; }
    private Dictionary<Type, int> DbContextDictionary { get; set; }

    public FlashCardDbContextFactory(IDatabaseSettings aDatabaseSettings)
    {
      DatabaseSettings = aDatabaseSettings;
      DbContextDictionary = new Dictionary<Type, int>();
      DbContextDictionary.Add(typeof(FlashCardDbContext), value: 1);
      //DbContextDictionary.Add(typeof(FlashCardDbContextSerializable), value: 2);
      // This allows for various configurations of the DbContext such as lazyloading off etc.
    }

    public TDbContext CreateDbContext<TDbContext>() where TDbContext : DbContext
    {
      int index = DbContextDictionary[typeof(TDbContext)];
      TDbContext dbContext = null;

      switch (index)
      {
        case 1:
          dbContext = new FlashCardDbContext(DatabaseSettings) as TDbContext;
          break;
        //case 2:
        //  dbContext = new FlashCardDbContextSerializable(DatabaseSettings) as TDbContext;
        //  break;
      }

      return dbContext;
    }
  }
}
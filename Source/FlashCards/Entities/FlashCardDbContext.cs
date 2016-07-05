namespace Tft.FlashCards.Entities
{
  using Configuration;
  using System;
  using System.Data.Entity;
  using System.Linq;

  public class FlashCardDbContext : DbContext
  {
    // Your context has been configured to use a 'FlashCardDbContext' connection string from your application's 
    // configuration file (App.config or Web.config). By default, this connection string targets the 
    // 'FlashCards.Entities.FlashCardDbContext' database on your LocalDb instance. 
    // 
    // If you wish to target a different database and/or database provider, modify the 'FlashCardDbContext' 
    // connection string in the application configuration file.
    public FlashCardDbContext(IDatabaseSettings aDatabaseSettings)
        : base(aDatabaseSettings.SqlConnectionString)
    {
      this.Configuration.ProxyCreationEnabled = true;
      this.Configuration.LazyLoadingEnabled = true;
    }

    // Add a DbSet for each entity type that you want to include in your model. For more information 
    // on configuring and using a Code First model, see http://go.microsoft.com/fwlink/?LinkId=390109.

    public virtual DbSet<FlashCardApplication> FlashCardApplications { get; set; }
    public virtual DbSet<FactoidCategory> FactoidCategories { get; set; }
    public virtual DbSet<Factoid> Factoids { get; set; }
    public virtual DbSet<FlashCard> FlashCards { get; set; }
    public virtual DbSet<FlashCardPlayerOptions> FlashCardPlayerOptions { get; set; }
    public virtual DbSet<FlashDeck> FlashDecks { get; set; }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
      modelBuilder.Entity<FactoidCategory>()
        .HasRequired(f => f.FlashCardApplication)
        .WithMany(f => f.FactoidCategories)
        .HasForeignKey(d => d.FlashCardApplicationGuid)
        .WillCascadeOnDelete(true);

      //modelBuilder.Entity<FactoidCategory>()
      //  .HasOptional(f => f.DisplayedFlashCardPlayerOptionsGuid)
      //  .WithMany()
      //  .Map(m => m.MapKey("DisplayedFlashCardPlayerOptionsGuid"));

      modelBuilder.Entity<FlashCardPlayerOptions>()
        .HasMany(f => f.DisplayCategories)
        .WithOptional()
        .Map(m => m.MapKey("DisplayFlashCardPlayerOptionsGuid"));

      modelBuilder.Entity<FlashCardPlayerOptions>()
        .HasRequired(f => f.EvaluationCategory)
        .WithOptional()
        .Map(m => m.MapKey("EvaluationFactoidCategoryGuid"));




      base.OnModelCreating(modelBuilder);

    }
  }
}
namespace Tft.FlashCards.Entities
{
  using System;
  using System.Collections.Generic;
  using System.Data.Entity;
  using System.Linq;

  public class ModelInitializer: DropCreateDatabaseIfModelChanges<FlashCardDbContext>
  //public class ModelInitializer : DropCreateDatabaseAlways<FlashCardDbContext>
  {
    public FlashCardApplication FlashCardApplication { get; set; }
    public FlashDeck ThaiFlashDeck { get; set; }
    public FlashCard CurrentFlashCard { get; set; }

    const string English = "English";
    const string EnglishLiteral = "English literal";
    const string Thai = "Thai";
    const string TransliterationMango = "Transliteration Mango";
    const string ThaiAudioMale = "Thai Audio Male";
    const string ThaiAudioFemale = "Thai Audio Female";
    const string EnglishAudio = "English Audio";
    const string Image = "Image";
    const string Video = "Video";

    protected override void Seed(FlashCardDbContext aFlashCardDbContext)
    {
      // initialize Entites here and add them to the context
      FlashCardApplication = new FlashCardApplication();
      FlashCardApplication.Name = "Flash Card Application";

      EnsureCategories();
      EnsureThaiFlashDeck();
      EnsureFlashCardPlayerOptions();

      aFlashCardDbContext.FlashCardApplications.Add(FlashCardApplication);

      aFlashCardDbContext.SaveChanges();

      base.Seed(aFlashCardDbContext);
    }

    private void EnsureThaiFlashDeck()
    {
      ThaiFlashDeck = new FlashDeck()
      {
        Name = "Thai Mango",
        FactoidCategories = FlashCardApplication.FactoidCategories,
      };
      FlashCardApplication.FlashDecks.Add(ThaiFlashDeck);

      EnsureHelloFlashCard();
      EnsureHowAreYouFlashCard();
    }

    private void EnsureHowAreYouFlashCard()
    {
      //throw new NotImplementedException();
    }

    private void EnsureHelloFlashCard()
    {
      var flashCard = new FlashCard();
      var factoids = new List<Factoid>
      {
        new Factoid
        {
          FactoidCategory = FlashCardApplication.FactoidCategories.First(f => f.Description == English),
          FactoidType = FactoidType.Text,
          Fact = "Hello",
          FlashCard = flashCard
        },
        new Factoid
        {
          FactoidCategory = FlashCardApplication.FactoidCategories.First(f => f.Description == Thai),
          FactoidType = FactoidType.Text,
          Fact = "สวัสดี",
          FlashCard = flashCard
        }
      };
      flashCard.Factoids = factoids;
      ThaiFlashDeck.FlashCards.Add(flashCard);     
    }

    private void EnsureFlashCardPlayerOptions()
    {
      //TODO
    }

    private void EnsureCategories()
    {
      var factoidCategories = new List<FactoidCategory>
        {
          new FactoidCategory
          {
            Guid = new Guid("90942662-BE70-4B96-B9D9-2333205C085A"),
            Description = English
          },
          new FactoidCategory
          {
            Guid = new Guid("2778DEE5-E9A8-41C0-BA9B-2B508A4F4B35"),
            Description = EnglishLiteral
          },
          new FactoidCategory
          {
            Guid = new Guid("744D13F3-3106-457C-9D79-AA5E4F034F56"),
            Description = Thai
          },
          new FactoidCategory
          {
            Guid = new Guid("EC376441-5650-4AC6-AF43-F361369749F4"),
            Description = TransliterationMango
          },
          new FactoidCategory
          {
            Guid = new Guid("37E6BB61-F94C-4D2C-B00C-6FDCB5D12914"),
            Description = EnglishAudio
          },
          new FactoidCategory
          {
            Guid = new Guid("FC1B90C0-68FF-4612-8145-7DA1C5832690"),
            Description = ThaiAudioMale
          },
          new FactoidCategory
          {
            Guid = new Guid("866D8E98-411C-4B9C-AFC4-536A6948AC42"),
            Description = ThaiAudioFemale
          },
          new FactoidCategory
          {
            Guid = new Guid("2CF4EA97-0D59-4126-BBD5-0BB304F41901"),
            Description = Image
          },
          new FactoidCategory
          {
            Guid = new Guid("B8E44174-EEA7-42AF-81DD-97263066FA61"),
            Description = Video
          },
        };

      factoidCategories.ForEach(aFactoid => FlashCardApplication.FactoidCategories.Add(aFactoid));

    }
  }
}
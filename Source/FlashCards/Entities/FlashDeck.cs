namespace Tft.FlashCards.Entities
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Web;

  public class FlashDeck:Entity
  {
    public string Name { get; set; }
    public virtual List<FlashCard> FlashCards { get; set; }
    public virtual List<FactoidCategory> FactoidCategories { get; set; }
    public FlashCardApplication FlashCardApplication { get; set; }
    public Guid FlashCardApplicationGuid { get; set; }

    public FlashDeck()
    {
      FlashCards = new List<FlashCard>();
      FactoidCategories = new List<FactoidCategory>();
    }
  }
}
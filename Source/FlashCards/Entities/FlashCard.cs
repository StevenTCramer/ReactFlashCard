namespace Tft.FlashCards.Entities
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Web;

  public class FlashCard:Entity
  {
    public virtual List<Factoid> Factoids { get; set; }
    public FlashDeck FlashDeck { get; set; }
    public Guid FlashDeckGuid { get; set; }

    public FlashCard()
    {
      Factoids = new List<Factoid>();
    }
  }
}
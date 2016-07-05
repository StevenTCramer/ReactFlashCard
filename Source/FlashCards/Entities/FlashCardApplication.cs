namespace Tft.FlashCards.Entities
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Web;

	public class FlashCardApplication:Entity
	{
    public FlashCardApplication()
    {
      FlashDecks = new List<FlashDeck>();
      FactoidCategories = new List<FactoidCategory>();
      FlashCardPlayerOptionsList = new List<FlashCardPlayerOptions>();
    }

    public string Name { get; set; }    
    public virtual List<FlashCardPlayerOptions> FlashCardPlayerOptionsList { get; set; }
    public virtual List<FlashDeck> FlashDecks { get; set; }
    public virtual List<FactoidCategory> FactoidCategories { get; set; }
  }
}

namespace Tft.FlashCards.Entities
{
  using System;
  using System.Collections.Generic;
  using System.Linq;
  using System.Web;

  public class FactoidCategory:Entity
  {
    public string Description { get; set; }
    public FlashCardApplication FlashCardApplication { get; set; }
    public Guid FlashCardApplicationGuid { get; set; }
    //public Guid DisplayedFlashCardPlayerOptionsGuid { get; set;}
    //public Guid EvaluatedFlashCardPlayerOptionsGuid { get; set; }
  }
}
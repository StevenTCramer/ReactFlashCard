namespace Tft.FlashCards.Entities
{
  using System;
  using System.Collections.Generic;
  using System.ComponentModel.DataAnnotations.Schema;
  using System.Linq;
  using System.Web;

  public class FlashCardPlayerOptions:Entity
  {
    public FlashDeck FlashDeck { get; set; }
    //[Column(name:"testthis")]
    public virtual List<FactoidCategory> DisplayCategories { get; set; }
    public FactoidCategory EvaluationCategory { get; set; }
    public FlashCardApplication FlashCardApplication { get; set; }
    public Guid FlashCardApplicationGuid { get; set; }
  }
}
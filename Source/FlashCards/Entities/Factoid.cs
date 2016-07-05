namespace Tft.FlashCards.Entities
{
  using System;
  using System.Collections.Generic;
  using System.ComponentModel.DataAnnotations;
  using System.Data.Entity.ModelConfiguration;
  using System.Linq;
  using System.Web;

  public enum FactoidType
  {
    Text,
    Unicode,
    Audio,
    Image,
    Video
  }

  public class Factoid: Entity
  {
    public FactoidType FactoidType { get; set; }    
    public FactoidCategory FactoidCategory { get; set; }
    public FlashCard FlashCard { get; set; }
    public Guid FlashCardGuid { get; set; }
    public string Fact { get; set; }
  }
}
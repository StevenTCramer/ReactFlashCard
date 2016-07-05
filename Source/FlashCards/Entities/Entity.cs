namespace Tft.FlashCards.Entities
{
  using System;
  using System.ComponentModel.DataAnnotations;
  public abstract class Entity
  {
    [Key]
    public Guid Guid { get; set; }

    public Entity()
    {
      Guid = Guid.NewGuid();
    }
  }
}
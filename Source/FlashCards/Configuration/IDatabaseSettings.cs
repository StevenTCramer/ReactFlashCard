namespace Tft.FlashCards.Configuration
{
  public interface IDatabaseSettings
  {
    string ServerName { get; }
    string DatabaseName { get; }
    bool IntegratedSecurity { get; }
    string UserId { get; }
    string Password { get; }
    string MetadataModelName { get; }
    string SqlConnectionString { get; }
    string EntityConnectionString { get; }
  }
}

namespace Tft.FlashCards.Configuration
{
  using System.Data.Entity.Core.EntityClient;
  using System.Data.SqlClient;

  public class DatabaseSettings : IDatabaseSettings
  {

    public DatabaseSettings(ConfigurationUtilities aConfigurationUtilities)
    {
      ConfigurationUtilities = aConfigurationUtilities;
    }

    private DatabaseSettingsConfigurationSection databaseSettingsConfigurationSection;
    private DatabaseSettingsConfigurationSection DatabaseSettingsConfigurationSection
    {
      get
      {
        if (databaseSettingsConfigurationSection == null)
        {
          databaseSettingsConfigurationSection = ConfigurationUtilities.EnsureConfigurationSection<DatabaseSettingsConfigurationSection>(DatabaseSettingsConfigurationSection.SectionName);
        }
        return databaseSettingsConfigurationSection;
      }
    }

    private ConfigurationUtilities configurationUtilities;
    private ConfigurationUtilities ConfigurationUtilities
    {
      get
      {
        return configurationUtilities;
      }

      set
      {
        this.configurationUtilities = value;
      }
    }

    private DatabaseSettingsConfigurationSection GetDatabaseSettingsConfigurationSection()
    {
      return null;
    }

    public virtual string DatabaseName => DatabaseSettingsConfigurationSection.DatabaseName;
    public virtual string ServerName => DatabaseSettingsConfigurationSection.ServerName;

    public virtual bool IntegratedSecurity => DatabaseSettingsConfigurationSection.IntegratedSecurity;

    public virtual string UserId => DatabaseSettingsConfigurationSection.UserId;

    public virtual string Password => DatabaseSettingsConfigurationSection.Password;

    public virtual bool Encrypt => DatabaseSettingsConfigurationSection.Encrypt;

    public virtual bool TrustedConnection => DatabaseSettingsConfigurationSection.TrustedConnection;

    public virtual string MetadataModelName => DatabaseSettingsConfigurationSection.MetadataModelName;

    public virtual string SqlConnectionString => BuildSqlConnectionString();

    public virtual string EntityConnectionString => BuildEntityConnectionString();

    private string BuildSqlConnectionString()
    {
      // Initialize the connection string builder for the 
      // underlying provider.
      var sqlBuilder = new SqlConnectionStringBuilder();

      // Set the properties for the data source.
      sqlBuilder.DataSource = ServerName;
      sqlBuilder.InitialCatalog = DatabaseName;
      sqlBuilder.IntegratedSecurity = IntegratedSecurity;
      sqlBuilder.UserID = UserId;
      sqlBuilder.Password = Password;
      sqlBuilder.MultipleActiveResultSets = true;
      sqlBuilder.Encrypt = Encrypt;
      sqlBuilder.TrustServerCertificate = TrustedConnection;
      return sqlBuilder.ConnectionString;
    }
    private string BuildEntityConnectionString()
    {
      // Initialize the EntityConnectionStringBuilder.
      var entityConnectionStringBuilder = new EntityConnectionStringBuilder();

      entityConnectionStringBuilder.Provider = "System.Data.SqlClient";
      entityConnectionStringBuilder.ProviderConnectionString = SqlConnectionString;
      entityConnectionStringBuilder.Metadata = $@"res://*/{MetadataModelName}.csdl|res://*/{MetadataModelName}.ssdl|res://*/{MetadataModelName}.msl";

      return entityConnectionStringBuilder.ToString();
    }
  }
}
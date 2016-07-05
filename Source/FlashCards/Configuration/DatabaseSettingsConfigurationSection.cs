namespace Tft.FlashCards.Configuration
{
	using System.Configuration;
	public class DatabaseSettingsConfigurationSection : ConfigurationSection
	{
		public const string SectionName = "FlashCards.DatabaseSettings";

		private const string ServerNamePropertyName = "ServerName";
		private const string DatabaseNamePropertyName = "DatabaseName";
		private const string UserIdPropertyName = "UserId";
		private const string PasswordPropertyName = "Password";
		private const string EncryptPropertyName = "Encrypt";
		private const string TrustedConnectionPropertyName = "TrustedConnection";
		private const string IntegratedSecurityPropertyName = "IntegratedSecurity";
		private const string MetadataModelNamePropertyName = "MetadataModelName";

		public DatabaseSettingsConfigurationSection()
		{
			ServerName = @"(LocalDb)\MSSQLLocalDB";
			DatabaseName = "FlashCards";
			IntegratedSecurity = true;
			//UserId = "userId";
			//Password = "password";
			Encrypt = false;
			TrustedConnection = false;
			MetadataModelName = "";

      //< add name = "FlashCardDbContext" connectionString = "data source=(LocalDb)\MSSQLLocalDB;initial catalog=FlashCards.Entities.FlashCardDbContext;integrated security=True;MultipleActiveResultSets=True;App=EntityFramework" providerName = "System.Data.SqlClient" />

    }

		[ConfigurationProperty(ServerNamePropertyName, IsRequired = true)]
		public string ServerName
		{
			get
			{
				return this[ServerNamePropertyName].ToString();
			}
			set
			{
				this[ServerNamePropertyName] = value;
			}
		}

		[ConfigurationProperty(DatabaseNamePropertyName, IsRequired = true)]
		public string DatabaseName
		{
			get
			{
				return this[DatabaseNamePropertyName].ToString();
			}
			set
			{
				this[DatabaseNamePropertyName] = value;
			}
		}

		[ConfigurationProperty(IntegratedSecurityPropertyName, IsRequired = true)]
		public bool IntegratedSecurity
		{
			get
			{
				return (bool) this[IntegratedSecurityPropertyName];
			}
			set
			{
				this[IntegratedSecurityPropertyName] = value;
			}
		}

		[ConfigurationProperty(UserIdPropertyName, IsRequired = false)]
		public string UserId
		{
			get
			{
				return this[UserIdPropertyName].ToString();
			}
			set
			{
				this[UserIdPropertyName] = value;
			}
		}

		[ConfigurationProperty(PasswordPropertyName, IsRequired = false)]
		public string Password
		{
			get
			{
				return this[PasswordPropertyName].ToString();
			}
			set
			{
				this[PasswordPropertyName] = value;
			}
		}


		[ConfigurationProperty(EncryptPropertyName, IsRequired = false)]
		public bool Encrypt
		{
			get
			{
				return (bool) this[EncryptPropertyName];
			}
			set
			{
				this[EncryptPropertyName] = value;
			}
		}

		[ConfigurationProperty(TrustedConnectionPropertyName, IsRequired = false)]
		public bool TrustedConnection
		{
			get
			{
				return (bool) this[TrustedConnectionPropertyName];
			}
			set
			{
				this[TrustedConnectionPropertyName] = value;
			}
		}

		[ConfigurationProperty(MetadataModelNamePropertyName, IsRequired = false)]
		public string MetadataModelName
		{
			get
			{
				return this[MetadataModelNamePropertyName].ToString();
			}
			set
			{
				this[MetadataModelNamePropertyName] = value;
			}
		}		
	}
}

namespace Tft.FlashCards.Configuration
{
  using System;
  using System.Configuration;

  public class ConfigurationUtilities
  {

    public TConfigurationSection EnsureConfigurationSection<TConfigurationSection>(string aSectionName) where TConfigurationSection : ConfigurationSection
    {
      return (TConfigurationSection) EnsureConfigurationSection(aSectionName, typeof(TConfigurationSection));
    }

    private ConfigurationSection EnsureConfigurationSection(string aSectionName, Type aConfigurationSectionType)
    {
      var configurationSection = ConfigurationManager.GetSection(aSectionName) as ConfigurationSection;
      if (configurationSection == null)
      {
        Console.WriteLine($"Congifuration Manager did not find config section ({aSectionName}) and will create it.");
        Configuration config;
        if (System.Web.HttpContext.Current != null)
          config = System.Web.Configuration.WebConfigurationManager.OpenWebConfiguration(path: "~");
        else
          config = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);

        if (config.Sections[aSectionName] == null)
        {
          configurationSection = (ConfigurationSection) Activator.CreateInstance(aConfigurationSectionType);

          config.Sections.Add(aSectionName, configurationSection);
          configurationSection.SectionInformation.ForceSave = true;
          config.Save(ConfigurationSaveMode.Full);
          ConfigurationManager.RefreshSection(aSectionName);
          configurationSection = ConfigurationManager.GetSection(aSectionName) as ConfigurationSection;
        }
      }

      return configurationSection;
    }
  }
}
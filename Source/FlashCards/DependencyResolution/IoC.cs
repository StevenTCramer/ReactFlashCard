// --------------------------------------------------------------------------------------------------------------------
// <copyright file="IoC.cs" company="Web Advanced">
// Copyright 2012 Web Advanced (www.webadvanced.com)
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// </copyright>
// --------------------------------------------------------------------------------------------------------------------


namespace Tft.FlashCards.DependencyResolution
{
  using Infrastructure.Mapping;
  using StructureMap;
  using System;
  using System.Diagnostics;
  using System.Threading;
  public static class Ioc
  {
    private static readonly Lazy<Container> containerBuilder =
        new Lazy<Container>(defaultContainer, LazyThreadSafetyMode.ExecutionAndPublication);

    public static IContainer Initialize()
    {
      return new Container(c => c.AddRegistry<DefaultRegistry>());
    }

    public static IContainer Container
    {
      get { return containerBuilder.Value; }
    }

    private static Container defaultContainer()
    {
      var container = new Container(aContainer => aContainer.AddRegistry<DefaultRegistry>());
      AutoMapperBootstrapper.Initialize(container);
      Debug.WriteLine(container.WhatDoIHave());
      container.AssertConfigurationIsValid();
      return container;
    }

  }
}
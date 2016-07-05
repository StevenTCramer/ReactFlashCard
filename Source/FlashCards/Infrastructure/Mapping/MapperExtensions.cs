namespace Tft.FlashCards.Infrastructure.Mapping
{
  using AutoMapper.QueryableExtensions;
  using DelegateDecompiler;
  using DelegateDecompiler.EntityFramework;
  using System;
  using System.Collections.Generic;
  using System.Data.Entity;
  using System.Linq;
  using System.Threading.Tasks;
  //using PagedList;
  using System.Web;

  public static class MapperExtensions
  {
    public static async Task<List<TDestination>> ProjectToListAsync<TDestination>(this IQueryable aQueryable)
    {
      return await aQueryable.ProjectTo<TDestination>().DecompileAsync().ToListAsync();
    }

    public static IQueryable<TDestination> ProjectToQueryable<TDestination>(this IQueryable aQueryable)
    {
      return aQueryable.ProjectTo<TDestination>().Decompile();
    }

    //public static IPagedList<TDestination> ProjectToPagedList<TDestination>(this IQueryable aQueryable, int aPageNumber, int aPageSize)
    //{
    //  return aQueryable.ProjectTo<TDestination>().Decompile().ToPagedList(aPageNumber, aPageSize);
    //}

    public static async Task<TDestination> ProjectToSingleOrDefaultAsync<TDestination>(this IQueryable aQueryable)
    {
      return await aQueryable.ProjectTo<TDestination>().DecompileAsync().SingleOrDefaultAsync();
    }
  }
}
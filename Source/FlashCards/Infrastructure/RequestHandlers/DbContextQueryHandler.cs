namespace Tft.FlashCards.Infrastructure.RequestHandlers
{
  using AutoMapper;
  using MediatR;
  using Mehdime.Entity;
  using System.Data.Entity;

  public abstract class DbContextQueryHandler<TQuery, TResponse, TDbContext> : IRequestHandler<TQuery, TResponse>
    where TQuery : IRequest<TResponse>
    where TDbContext : DbContext
  {
    protected IDbContextScopeFactory DbContextScopeFactory { get; }
    protected MapperConfiguration MapperConfiguration { get; }

    public DbContextQueryHandler(IDbContextScopeFactory aDbContextScopeFactory, MapperConfiguration aMapperConfiguration)
    {
      DbContextScopeFactory = aDbContextScopeFactory;
      MapperConfiguration = aMapperConfiguration;
    }

    public TResponse Handle(TQuery aQuery)
    {
      using (var dbContextScope = DbContextScopeFactory.CreateReadOnly())
      {
        TDbContext dbContext = dbContextScope.DbContexts.Get<TDbContext>();
        return HandleInScope(aQuery, dbContext);
      }
    }

    protected abstract TResponse HandleInScope(TQuery aQuery, TDbContext aDbContext);    
  }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IdentityServer4WebApp.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace IdentityServer4WebApp.Controllers
{
    [Authorize]
    [ApiController]
    public class ExchangeRateController : Controller
    {

        private static readonly string[] Currencies = new[]
        {
            "RON", "UAH",  "EUR", "USD", "BGN"
        };

        [HttpGet("/api/rates")]
        public IEnumerable<ExchangeRateItem> Get()
        {
            var random = new Random();
            return Enumerable.Range(1, 5).Select(index => new ExchangeRateItem
            {
                FromCurrency = "MDL",
                ToCurrency = Currencies[random.Next(Currencies.Length)],
                Value = Math.Round(1.0 + random.Next(1, 100), 2)
            }).ToList();
        }
    }
}
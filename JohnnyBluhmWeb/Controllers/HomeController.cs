using JohnnyBluhmWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace JohnnyBluhmWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View("Johnny");
        }

        public IActionResult Prece1()
        {
            return View();
        }

        public IActionResult Resume()
        {
            return View();
        }

        public IActionResult Projects()
        {
            return View();
        }

        public IActionResult SignIn()
        {
            return Redirect("https://www.strava.com/oauth/authorize?client_id=66831&response_type=code&redirect_uri=https://localhost:7038/api/exchange_token&scope=read,activity:read,activity:read_all");
        }

        public IActionResult Test()
        {
            return Redirect("https://localhost:7038/api/exchange_token");
        }

        public IActionResult FinalPaper()
        {
            return View("AiPaper");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
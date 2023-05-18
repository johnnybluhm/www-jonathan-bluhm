using JohnnyBluhmWeb.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace MongoServiceTests
{
    public class DataTransformerTests
    {
        private DataTransformer mongoService;

        public DataTransformerTests()
        {
            mongoService = new DataTransformer();
        }

        [Fact]
        public async void TestStreamConverter()
        {
            await mongoService.ConvertHrStreamsToBetterStreams();


        }
    }
}

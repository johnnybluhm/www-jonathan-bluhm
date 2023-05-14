using JohnnyBluhmWeb.DataAccess;
using JohnnyBluhmWeb.Models;
using System.Threading.Tasks;
using Xunit;
using MongoDB.Driver;
using MongoDB.Bson;

namespace MognoServiceTests
{
    public class MongoServiceTests
    {
        MongoService subject;
        public MongoServiceTests()
        {
            subject = new MongoService();
        }

        [Fact]
        public void AlwaysPasses()
        {
            Assert.True(true);
        }

        [Fact]
        public async Task TestUsersCollection()
        {
            var filter = Builders<DetailedActivity>.Filter.Empty;
            var result = await subject.detailedActivitiesCollection.FindAsync<DetailedActivity>(filter);

            Assert.NotNull(result);
        }
    }
}
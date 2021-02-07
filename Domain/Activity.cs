using System;


namespace Domain
{
    public class Activity
    {
        //! **porp** shortcut to auto create a property with getters and setters
        // In this case, Guid allows you to create an Id from server or client-side
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Category { get; set; }

        public string Description { get; set; }

        public DateTime Date { get; set; }

        public string City { get; set; }

        public string Venue { get; set; }
    }
}
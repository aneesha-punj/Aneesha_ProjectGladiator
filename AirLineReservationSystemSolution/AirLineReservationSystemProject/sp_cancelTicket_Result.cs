//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace AirLineReservationSystemProject
{
    using System;
    
    public partial class sp_cancelTicket_Result
    {
        public string BID { get; set; }
        public string TicketID { get; set; }
        public System.DateTime Booking_Date { get; set; }
        public System.DateTime TripDate { get; set; }
        public string Airplane_No { get; set; }
        public string DeparturePoint { get; set; }
        public System.TimeSpan Departure_Time { get; set; }
        public string ArrivalPoint { get; set; }
        public System.TimeSpan Arrival_Time { get; set; }
        public string Payment_Amount { get; set; }
        public string TicketStatus { get; set; }
    }
}

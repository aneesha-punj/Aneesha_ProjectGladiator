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
    using System.Collections.Generic;
    
    public partial class tblPayment
    {
        public int ID { get; set; }
        public string prefix { get; set; }
        public string Payment_ID { get; set; }
        public string Payment_Amount { get; set; }
        public string Payment_Status { get; set; }
        public Nullable<System.DateTime> Payment_date { get; set; }
        public string Bid { get; set; }
    
        public virtual tblBooking tblBooking { get; set; }
    }
}

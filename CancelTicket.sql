alter table tblTicket_table Add TicketStatus nvarchar(15);

select * from tblUser
select * from tbl_AircraftDetails
select * from  tbl_FlightDetails
select * from  tblTrips
select * from  tblSeats
select * from tblPayments
select * from  tblBookings
select * from tblTicket_table
select * from tblpassenger_table 

go

create proc sp_cancelTicket(@uid varchar(40))
as
Select b.BID, t.TicketID, b.Booking_Date, tr.TripDate, tr.Airplane_No, f.DeparturePoint, tr.Departure_Time, 
 f.ArrivalPoint, tr.Arrival_Time, p.[Payment Amount], t.TicketStatus
from [tblBookings] b
Inner Join [tblTicket_table] t
on b.BID = t.BID
Inner Join [tblPayments] p
on p.Bid=b.BID
Inner Join [tblpassenger_table] ps
on ps.TicketID =t.TicketID
Inner Join [tblTrips] tr
on t.TripID=tr.TripID
Inner join [tbl_FlightDetails] f
on tr.FlightID=f.FlightId 
Where b.UserID= @uid AND tr.TripDate>GETDATE()
order by  b.BID desc

exec sp_cancelTicket 'U1'

select* from tblTicket_table
sp_help tblTicket_table
----------------------------------------------------------------------------
go
create proc sp_cancelticketStatus(@tid varchar(30))
as
update tblTicket_table Set TicketStatus='Cancelled'
where TicketID=@tid

exec sp_cancelticketStatus 'T3'

--------------------------------------------------------------------------------
go
create proc sp_cancelbookingStatus(@bid varchar(30))
as 

select * from tblUser
select * from tbl_AircraftDetails
select * from  tbl_FlightDetails
select * from  tblTrips
select * from  tblSeats
select * from tblPayments
select * from  tblBookings
select * from tblTicket_table
select * from tblpassenger_table 


---------------------------------------Alter Table Passengers---------------
alter table tblpassenger_table 
add Age int;

sp_help tblpassenger_table 

------------------------------------------------------	Display Passengers------------
go
Alter proc sp_displaypassengers(@uid varchar(40))
AS
Select distinct tblpassenger_table.Pname, tblpassenger_table.Gender, tblpassenger_table.Age
From tblpassenger_table 
Inner join tblTicket_table on tblTicket_table.TicketID=tblpassenger_table.TicketID
Inner join tblBookings on tblBookings.BID=tblTicket_table.BID
Where tblBookings.UserID=@uid
------------------------------------------------------------
exec sp_displaypassengers 'U1'

select * from tblpassenger_table 

insert into tblpassenger_table(TicketID, PName, Gender, SeatID) values ('T2', 'Shamu', 'Male', '2A')
go

--------------------------------------Add Passengers--------------------------
Alter proc sp_insertpassengers(@TicketID varchar(40),@Pname varchar(30), @Gender varchar(5),@SeatID varchar(10), @Age int)
AS 
insert into tblpassenger_table(TicketID,PName, Gender, SeatID, Age) 
values (@TicketID, @Pname, @Gender,@SeatID, @Age)

----------------------------------------------------------


exec sp_insertpassengers 'T1','Aneesha', 'Female','2A', '22'


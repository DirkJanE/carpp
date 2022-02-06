--Eerste keer starten met onderstaande als comment. Tweede keer starten met uncomment als er behoefte is aan testdata.


--rent out users
INSERT INTO app_user(username, password, userprofile) VALUES ('Mark', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rentout'); --Password1!
INSERT INTO app_user(username, password, userprofile) VALUES ('Eva', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rentout'); --Password1!
INSERT INTO app_user(username, password, userprofile) VALUES ('Hans', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rentout'); --Password1!
INSERT INTO app_user(username, password, userprofile) VALUES ('Karel', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rentout'); --Password1!

--rent users
INSERT INTO app_user(username, password, userprofile) VALUES ('Gert', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rent'); --Password1!
INSERT INTO app_user(username, password, userprofile) VALUES ('Anne', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rent'); --Password1!
INSERT INTO app_user(username, password, userprofile) VALUES ('Wilma', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rent'); --Password1!
INSERT INTO app_user(username, password, userprofile) VALUES ('Michael', '$2a$10$/aM8vfWJjgvK3pkBmyFmI.THgD4ILtUkSeQ8C.edBsXCFJ0CuzC22', 'rent'); --Password1!

--rent out profiles
INSERT INTO profile(profileid, lat, lon, brandtype, rentprize, userid) VALUES ('1', '52.2300', '5.1600', 'Volkswagen Polo', '40.00', '1');
INSERT INTO profile(profileid, lat, lon, brandtype, rentprize, userid) VALUES ('2', '52.2000', '5.3000', 'Ford Mondeo', '45.00', '2');
INSERT INTO profile(profileid, lat, lon, brandtype, rentprize, userid) VALUES ('3', '52.2250', '5.2500', 'Volvo XC40', '60.00', '3');
INSERT INTO profile(profileid, lat, lon, brandtype, rentprize, userid) VALUES ('4', '52.2134', '5.1931', 'Fiat 500', '30.00', '4');

--rent profiles
INSERT INTO profile(profileid, searchprize, searchdistance, searchbrand, userid) VALUES ('5', '50.00', '5', 'Volkswagen', '5');
INSERT INTO profile(profileid, searchprize, searchdistance, searchbrand, userid) VALUES ('6', '40.00', '20', 'Ford', '6');
INSERT INTO profile(profileid, searchprize, searchdistance, searchbrand, userid) VALUES ('7', '30.00', '40', 'Fiat', '7');
INSERT INTO profile(profileid, searchprize, searchdistance, searchbrand, userid) VALUES ('8', '20.00', '80', 'Ford', '8');

--messages
INSERT INTO message(messageid, contactname, message, userid) VALUES ('1', 'Mark', 'Hallo Mark', '5');
INSERT INTO message(messageid, contactname, message, userid) VALUES ('2', 'Gert', 'Hallo Gert', '1');
INSERT INTO message(messageid, contactname, message, userid) VALUES ('3', 'Mark', 'Kan ik op maandag je auto huren?', '5');
INSERT INTO message(messageid, contactname, message, userid) VALUES ('4', 'Gert', 'Ja, dat kan', '1');
INSERT INTO message(messageid, contactname, message, userid) VALUES ('5', 'Eva', 'Hallo Eva', '5');
INSERT INTO message(messageid, contactname, message, userid) VALUES ('6', 'Gert', 'Hallo Gert', '2');




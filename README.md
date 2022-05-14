# recipe_app

Aplicația aceasta are ca scop atât găsirea de rețete culinare, pentru un animit fel de mâncare, cât și afișarea și trimiterea lor pe email, sub formă de link.

Link-urile rețetelor sunt preluate cu ajutorul API-ului de pe site-ul Edamam (https://www.edamam.com). Când se caută un anumit fel de mâncare, se returnează un fișier JSON, care conține link-ul unei rețete pentru prepararea  felului de mâncare respectiv. Am creat un API key pe care l-am folosit în URL-ul request-ului și pe care l-am stocat în fișierul .env.

Email-urile sunt trimise cu ajutorul API-ului SendGrid (https://docs.sendgrid.com). Email-urile au fost setate să se trimită de pe adresa mea de student, ceilalți paramatrii (mesajul, numele expeditorului și adresa destinatarului) fiind adăugate din aplicație. Am creat un API key pentru autentificare, pe care l-am stocat în fișierul .env, iar setarea acestuia a fost realizată în fișierul mailFunctions.

Pentru a stoca email-urile trimise am creat următoarea bază de date:

<img width="485" alt="image" src="https://user-images.githubusercontent.com/105499382/168449202-a9bcd6ba-0522-4fec-82be-d838cc5bad9b.png">

Mai jos voi prezenta metodele HTTP folosite:

- GET messages - Returnează email-urile din baza de date:

<img width="628" alt="image" src="https://user-images.githubusercontent.com/105499382/168449325-8aea14c7-0dbb-4172-a47a-bdd8a43bb4a3.png">

- GET recipe - Returnează link-ul către rețeta culinară (pentru exemplificare am dat ca valoare „chicken”)

<img width="632" alt="image" src="https://user-images.githubusercontent.com/105499382/168449403-47fc312b-983a-49ac-a2b5-df3a94e814f8.png">

- SEND mail - Introduce un email în baza de date (pentru exemplificare am trimis un mail de pe adresa de student pe adresa personală, cu textul „Test email”)

<img width="623" alt="image" src="https://user-images.githubusercontent.com/105499382/168449501-56cbd5b7-44c8-49aa-95e6-ccddff631bdb.png">

- DELETE a message by ID - Șterge un email din baza de date

<img width="627" alt="image" src="https://user-images.githubusercontent.com/105499382/168449588-4eacc78c-7ae2-40c1-a552-f817ea9bf7ca.png">

Aplicația conține 3 zone:
- Selectarea unui fel de mâncare și afișarea link-ului către rețetă
- Zona în care se introduce numelui expeditorului și adresei destinatarului pentru trimiterea email-ului
- Lista de email-uri cu link-urile de rețete trimise anterior

<img width="748" alt="image" src="https://user-images.githubusercontent.com/105499382/168449813-b8f1cde7-4717-4ed4-86d6-66a85a9857c5.png">

În momentul în care se introduce un fel de mâncare și se apasă butonul „Find Recipe”, se afișează link-ul către acea rețetă:

<img width="305" alt="image" src="https://user-images.githubusercontent.com/105499382/168449902-dc658374-6638-4af0-a9e4-3eb1198c80d8.png">

După introducerea numelui expeditorului și a adresei de email a destinatarului, link-ul rețetei se va trimite pe mail dacă se apasă butonul „Send Mail”:

<img width="721" alt="image" src="https://user-images.githubusercontent.com/105499382/168450028-bdb01863-dd2c-4e13-b2db-330604061b5f.png">

<img width="638" alt="image" src="https://user-images.githubusercontent.com/105499382/168450045-c22eb791-a163-4a64-b874-51f62b4f98b8.png">

În momentul în care se dă refresh paginii, lista de email-uri trimise se actualizează:

<img width="698" alt="image" src="https://user-images.githubusercontent.com/105499382/168450109-7993bfd2-e6d4-46fb-83a5-378a3bd6a714.png">

Referințe:
- Semiar Cloud Computing
- https://docs.sendgrid.com
- https://docs.sendgrid.com

Link video youtube:

Link heroku backend:
Link heroku frontend:

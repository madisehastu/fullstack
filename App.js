Title User creates a new note using the single page version of the app
actor User
User->browser: writes "post new note"
browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
server->browser: application/json new_note_spa


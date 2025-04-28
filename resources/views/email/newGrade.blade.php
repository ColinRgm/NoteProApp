<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Nouvelle note ajoutée</title>
</head>
<body>

<p>Voici la dernière note ajoutée par {{auth()->user()->first_name}} {{auth()->user()->last_name}}</p>

@if($module && $module->name)
    <h2> {{ $module->id }} - {{ $module->name }} </h2>
@endif
@if($branch && $branch->name)
    <h3> {{ $branch->name }} </h3>
@endif
<ul>
    @if($grade->test_name)
        <li><strong>Nom du test :</strong> {{ $grade->test_name }} </li>
    @endif
    <li><strong>Note: </strong> {{ $grade->grade }} </li>
    <li><strong>Semestre: </strong> {{ $grade->semester }} </li>
</ul>
<p>Connectez-vous à <a href="http://127.0.0.1:8000/dashboard">NoteProApp</a> pour accéder à l'ensemble des notes</p>
</body>
</html>

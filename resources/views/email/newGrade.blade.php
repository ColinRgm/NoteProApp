<!DOCTYPE html>
<html lang="fr">
<head>
    <title>Nouvelle note ajoutée</title>
</head>
<body>

<p>Voici les informations de la note que vous venez d'ajouter !</p>

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
</body>
</html>

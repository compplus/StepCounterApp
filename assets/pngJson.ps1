function getfileby($type){
$a=Get-ChildItem -Recurse -Filter *$type
$a=$a
foreach ($i in $a){
	$n=$i.name
	$n=$n.Replace($type,'')
	$cur=pwd
	$path=resolve-path $i.fullname -relative
	$path=$path.Replace("\", "/")
	echo "'$n':require('$path'),"
}
}

echo 'export const assets = {' | Out-File -Encoding Ascii assets.js
	getfileby('.png') | Out-File -Encoding Ascii -Append assets.js
	getfileby('.jpg') | Out-File -Encoding Ascii -Append assets.js
echo '}' | Out-File -Encoding Ascii -Append assets.js

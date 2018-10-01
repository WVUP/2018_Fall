console.log('praise thanos');

var spoilMe = document.getElementById('spoil');
spoilMe.addEventListener('click', buildUI)

function buildUI()
{
    let html = '';
    html += `<div><table align="center" style="width:50%">
    <tr>
        <th></th>
        <th>How Much it Hurts</th>
        <th>Value of Potential Benefit</th>
    </tr>
    <tr>
        <td><b>Spiderman's death</b></td>
        <td>
            <input type="radio" name="spidey" value="1" id="spidHurtVal">1 
            <input type="radio" name="spidey" value="2" id="spidHurtVal">2
            <input type="radio" name="spidey" value="3" id="spidHurtVal">3
            <input type="radio" name="spidey" value="4" id="spidHurtVal">4
            <input type="radio" name="spidey" value="5" id="spidHurtVal">5
        </td>
        <td>
                <input type="radio" name="spideyV" value="1" id="spidBenVal">1 
                <input type="radio" name="spideyV" value="2" id="spidBenVal">2
                <input type="radio" name="spideyV" value="3" id="spidBenVal">3
                <input type="radio" name="spideyV" value="4" id="spidBenVal">4
                <input type="radio" name="spideyV" value="5" id="spidBenVal">5
        </td>
    </tr>
    <tr>
        <td><b>Gamorra's Death</b></td>
        <td>
                <input type="radio" name="gam" value="1" id="gamHurtVal">1 
                <input type="radio" name="gam" value="2" id="gamHurtVal">2
                <input type="radio" name="gam" value="3" id="gamHurtVal">3
                <input type="radio" name="gam" value="4" id="gamHurtVal">4
                <input type="radio" name="gam" value="5" id="gamHurtVal">5
        </td>
        <td>
                <input type="radio" name="gamV" value="1" id="gamBenVal">1 
                <input type="radio" name="gamV" value="2" id="gamBenVal">2
                <input type="radio" name="gamV" value="3" id="gamBenVal">3
                <input type="radio" name="gamV" value="4" id="gamBenVal">4
                <input type="radio" name="gamV" value="5" id="gamBenVal">5
        </td>
    </tr>
    <tr>
        <td><b>The Other Avengers</b></td>
        <td>
                <input type="radio" name="aven" value="1" id="avenHurtVal">1 
                <input type="radio" name="aven" value="2" id="avenHurtVal">2
                <input type="radio" name="aven" value="3" id="avenHurtVal">3
                <input type="radio" name="aven" value="4" id="avenHurtVal">4
                <input type="radio" name="aven" value="5" id="avenHurtVal">5
        </td>
        <td>
                <input type="radio" name="avenV" value="1" id="avenBenVal">1 
                <input type="radio" name="avenV" value="2" id="avenBenVal">2
                <input type="radio" name="avenV" value="3" id="avenBenVal">3
                <input type="radio" name="avenV" value="4" id="avenBenVal">4
                <input type="radio" name="avenV" value="5" id="avenBenVal">5
        </td>
    </tr>
    <tr>
        <td><b>Total Scores</b></td>
        <td><input type="text" name="hurtScore" placeholder="Score of Hurt" required pattern="[0-9]" title="Numeric Value"></td>
        <td><input type="text" name="benefitScore" placeholder="Score of Benefit" required pattern="[0-9]" title="Numeric Value"></td>
    </tr>
    <tr>
        <td><b>Input 1 For a Higher Benefit Score, 0 Otherwise</b></td>
        <td>
            <input type="radio" name="curScore" value="0">0
        </td>
        <td>
            <input type="radio" name="curScore" value="1">1
        </td>
    </tr>
</table>
<hr>
<div>
    <table align="center" style="width:50%">
        <tr>
            <td><b>Did Thanos End World Hunger?</b></th>
        </tr>
        <tr>
            <td></td>
            <td><input type="radio" name="secScore" value="no">No (0)</td>
            <td><input type="radio" name="secScore" value="yes">Yes (1)</td>
        </tr>
    </table>
</div>
<hr>
<div>
    <table align="center" style="width:50%">
        <tr>
            <td><b>Can the Universe Still Survive?</b></th>
        </tr>
        <tr>
            <td></td>
            <td><input type="radio" name="thirScore" value="no">No (0)</td>
            <td><input type="radio" name="thirScore" value="yes">Yes (1)</td>
        </tr>
    </table>
</div>
<hr>
<div>
    <b>Add Up the Total of 0s or 1s You May Have Selected</b>
    <br/>
    <b>If Total = 0, Thanos is a B.A.D Man</b>
    <br/>
    <b>If Total = 1, Thanos is a Mean Dude</b>
    <br/>
    <b>If Total = 2, Thanos is a Alright Person</b>
    <br/>
    <b>If Total = 3, Thanos is a Bonifide Hero</b>
</div>
<hr>
<div>
    <b>For Any Questions or Comments on How to Praise Thanos More, Fill in the Comment Box Below and Submit</b>  
</div>
<textarea name="commentBox" cols="60" rows="15"></textarea>
<br/>
<button type="submit"> Submit for Testing</button><div>`

console.log(html);
document.getElementById('form').innerHTML = html;
}

var values[];

var spidHurtVal = document.getElementById('spidHurtVal');
spidHurtVal.addEventListener('click', addValue(spidHurtVal.value()))

var spidBenVal = document.getElementById('spidBenVal');
spidBenVal.addEventListener('click', addValue(spidBenVal.value()))

var gamHurtVal = document.getElementById('gamHurtVal');
gamHurtVal.addEventListener('click', addValue(gamHurtVal.value()))

var gamBenVal = document.getElementById('gamBenVal');
gamBenVal.addEventListener('click', addValue(gamBenVal.value()))

var avenHurtVal = document.getElementById('avenHurtVal');
avenHurtVal.addEventListener('click', addValue(avenHurtVal.value()))

var avenBenVal = document.getElementById('avenBenVal');
avenBenVal.addEventListener('click', addValue(avenBenVal.value()))



function addValue(value)
{
values.push(value);
}
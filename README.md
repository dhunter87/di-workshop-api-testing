<h1>api test self directed workshop.</h1>
<table>
    <tr>
        <th>test number</th>
        <th>test name</th>
        <th>precondition</th>
        <th>Method</th>
        <th>Path</th>
        <th>Request Parameters</th>
        <th>Expected status code</th>
        <th>Expected Response</th>
        <th>Expected postconditions</th>
        <th>notes and assumptions</th>
    </tr>
    <tr>
        <td>1</td>
        <td>get todos collection - when there are no objects in the collection</td>
        <td>[]</td>
        <td>GET</td>
        <td>http://todos.demo.rootpath<br/>.io/todos/</td>
        <td>none</td>
        <td>200 ok</td>
        <td>{<br/>error message: There are no todos yet<br/>}</td>
        <td>none</td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td>get todos collection</td>
        <td>[2]</td>
        <td>GET</td>
        <td>http://todos.demo.rootpath<br/>.io/todos/</td>
        <td>none</td>
        <td>200 ok</td>
        <td>{<br/>"id":9879<br/>"title" : iefhwiocdj<br/>}<br/>{<br/>"id":9569<br/>"title" : dkndio<br/>}</td>
        <td>none</td>
        <td></td>
    </tr>
    <tr>
        <td>3</td>
        <td>isolate a single todo from the array</td>
        <td>[1]</td>
        <td>GET</td>
        <td>/todos/</td>
        <td>1892</td>
        <td>200 ok</td>
        <td>{<br/>'id' : 1982<br/>'title. : "play"<br/>'due': "2019-10-10"<br/>'notes' : ""<br/>}</td>
        <td>none</td>
        <td></td>
    </tr>
    <tr>
        <td>4</td>
        <td>Create Todo object</td>
        <td>[]</td>
        <td>POST</td>
        <td>/todos/</td>
        <td>title=play<br/>due=2019-10-10</td>
        <td>201 created</td>
        <td>{<br/>'id' : 9877<br/>'title. : "play"<br/>'due': "2019-10-10"<br/>'notes' : ""<br/>}</td>
        <td>[1]<br/><br/>todos array now has one object</td>
        <td></td>
    </tr>
    <tr>
        <td>5</td>
        <td>update todo object</td>
        <td>[1]</td>
        <td>PUT</td>
        <td>/todos/</td>
        <td>9877<br/>title=playing<br/>due=2029-10-10<br/>notes= liwdhedfilqwej</td>
        <td>200 ok</td>
        <td>{<br/>'id' : 9877<br/>'title. : "playing"<br/>'due': "2029-10-10"<br/>'notes' : "liwdhedfilqwej"<br/>}</td>
        <td>object attributes have been updated</td>
        <td></td>
    </tr>
    <tr>
        <td>6</td>
        <td>update collection</td>
        <td>[1]</td>
        <td>PUT</td>
        <td>/todos/</td>
        <td>title=playing<br/>due=2029-10-10<br/>notes= liwdhedfilqwej</td>
        <td>405 method not allowed</td>
        <td>{<br/>'error message': you cannot modify the collection directly<br/>}</td>
        <td>none</td>
        <td></td>
    </tr>
    <tr>
        <td>7</td>
        <td>update todo object</td>
        <td>[1]</td>
        <td>PUT</td>
        <td>/todos/</td>
        <td>9877<br/>title=playing<br/>due=2029-10-10</td>
        <td>422 unprocessable entry</td>
        <td>{<br/>error message: you must indicate all fields<br/>}</td>
        <td>none</td>
        <td></td>
    </tr>
    <tr>
        <td>8</td>
        <td>update todo object</td>
        <td>[1]</td>
        <td>PATCH</td>
        <td>/todos/</td>
        <td>title=olefjoiwefjio</td>
        <td>200 ok</td>
        <td>{<br/>'title. : "olefjoiwefjio"<br/>'id' : 1982<br/>'due': "2029-10-10"<br/>'notes' : "liwdhedfilqwej"<br/>}</td>
        <td>object attributes have been updated</td>
        <td></td>
    </tr>
    <tr>
        <td>9</td>
        <td>delete todo object</td>
        <td>[1]</td>
        <td>DELETE</td>
        <td>/todos/</td>
        <td>10552</td>
        <td>204 no content</td>
        <td>no body return for response</td>
        <td>[]</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td>delete todo collection</td>
        <td>[]</td>
        <td>DELETE</td>
        <td>/todos/</td>
        <td>none</td>
        <td>405 method not allowed</td>
        <td>{<br/>You can not delete the collection<br/>}</td>
        <td>none</td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
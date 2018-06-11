webpackJsonp([7893235013685],{5792:function(a,n){a.exports={data:{markdownRemark:{html:'<h1>Data Types</h1>\n<p>Variables can store data of different types such as:</p>\n<ul>\n<li>String (“Hello”)</li>\n<li>Integer (5)</li>\n<li>Float (also called double) (1.0)</li>\n<li>Boolean ( 1 or 0 )</li>\n<li>Array ( array(“I”, “am”, “an”, “array”) )</li>\n<li>Object</li>\n<li>NULL</li>\n<li>Resource</li>\n</ul>\n<h2>String</h2>\n<p>A string is a sequence of characters. It can be any text inside quotes (single or double):</p>\n<h4>Example</h4>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token variable">$x</span> <span class="token operator">=</span> <span class="token string">"Hello!"</span><span class="token punctuation">;</span>\n<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token string">\'Hello!\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Integer</h2>\n<p>An integer data type is a non-decimal number between -2,147,483,648 and 2,147,483,647.</p>\n<p>Rules for integers:</p>\n<ul>\n<li>An integer must have at least one digit</li>\n<li>An integer must not have a decimal point</li>\n<li>An integer can be either positive or negative</li>\n<li>Integers can be specified in three formats: decimal (10-based), hexadecimal (16-based - prefixed with 0x) or octal (8-based - prefixed with 0)</li>\n</ul>\n<h4>Example</h4>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Float</h2>\n<p>A float (floating point number) is a number with a decimal point or a number in exponential form.</p>\n<h4>Example</h4>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token variable">$x</span> <span class="token operator">=</span> <span class="token number">5.01</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Boolean</h2>\n<p>A Boolean represents two possible states: TRUE or FALSE. Booleans are often used in conditional testing.</p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token variable">$x</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token variable">$y</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>Array</h2>\n<p>An array stores multiple values in one single variable.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token variable">$colours</span> <span class="token operator">=</span> <span class="token keyword">array</span><span class="token punctuation">(</span><span class="token string">"Blue"</span><span class="token punctuation">,</span><span class="token string">"Purple"</span><span class="token punctuation">,</span><span class="token string">"Pink"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2>NULL Value</h2>\n<p>Null is a special data type which can have only one value: NULL.<br>\nA variable of data type NULL is a variable that has no value assigned to it.<br>\nVariables can also be emptied by setting the value to NULL.  </p>\n<p><strong>Note:</strong> If a variable is created without a value, it is automatically assigned a value of NULL.  </p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token string">"Hello world!"</span><span class="token punctuation">;</span>\n<span class="token variable">$x</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>\n<p>Output:<br>\nNULL</p>\n<h2>Object</h2>\n<p>An object is a data type which stores data and information on how to process that data.<br>\nIn PHP, an object must be explicitly declared.<br>\nFirst we must declare a class of object. A class is a structure that can contain properties and methods.</p>\n<p><strong>Example:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-php"><code><span class="token delimiter important">&lt;?php</span>\n<span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token variable">$this</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">model</span> <span class="token operator">=</span> <span class="token string">"VW"</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment" spellcheck="true">// create an object</span>\n<span class="token variable">$herbie</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// show object properties</span>\n<span class="token keyword">echo</span> <span class="token variable">$herbie</span><span class="token operator">-</span><span class="token operator">></span><span class="token property">model</span><span class="token punctuation">;</span>\n<span class="token delimiter important">?></span>\n</code></pre>\n      </div>',fields:{slug:"/php/variables/data-types/"},frontmatter:{title:"PHP Data Types"}}},pathContext:{slug:"/php/variables/data-types/"}}}});
//# sourceMappingURL=path---php-variables-data-types-562745cafbfcb4882c27.js.map
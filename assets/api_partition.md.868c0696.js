import{_ as s,o as a,c as n,a as l}from"./app.a12f6983.js";const h=JSON.parse('{"title":"分区相关接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"获取分区列表","slug":"获取分区列表","link":"#获取分区列表","children":[]},{"level":2,"title":"新增分区","slug":"新增分区","link":"#新增分区","children":[]},{"level":2,"title":"删除分区","slug":"删除分区","link":"#删除分区","children":[]}],"relativePath":"api/partition.md"}'),t={name:"api/partition.md"},e=l(`<h1 id="分区相关接口" tabindex="-1">分区相关接口 <a class="header-anchor" href="#分区相关接口" aria-hidden="true">#</a></h1><h2 id="获取分区列表" tabindex="-1">获取分区列表 <a class="header-anchor" href="#获取分区列表" aria-hidden="true">#</a></h2><h4 id="请求url" tabindex="-1">请求URL <a class="header-anchor" href="#请求url" aria-hidden="true">#</a></h4><ul><li><code>http://域名/api/v1/partition</code></li></ul><h4 id="请求方式" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式" aria-hidden="true">#</a></h4><ul><li>GET</li></ul><h4 id="返回示例" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">测试大分区</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">parentId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">id</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">测试小分区</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">parentId</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="新增分区" tabindex="-1">新增分区 <a class="header-anchor" href="#新增分区" aria-hidden="true">#</a></h2><h4 id="请求url-1" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-1" aria-hidden="true">#</a></h4><ul><li><code>http://域名/api/v1/partition</code></li></ul><h4 id="请求方式-1" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-1" aria-hidden="true">#</a></h4><ul><li>POST</li></ul><h4 id="请求头" tabindex="-1">请求头 <a class="header-anchor" href="#请求头" aria-hidden="true">#</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li><li><code>Authorization&#39;: access_token</code></li></ul><h4 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td style="text-align:left;">是</td><td style="text-align:left;">string</td><td>分区名</td></tr><tr><td style="text-align:left;">parentId</td><td style="text-align:left;">否</td><td style="text-align:left;">int</td><td>所属分区id</td></tr></tbody></table><h4 id="返回示例-1" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-1" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">mssage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="备注" tabindex="-1">备注 <a class="header-anchor" href="#备注" aria-hidden="true">#</a></h4><p>需要超级管理员权限</p><h2 id="删除分区" tabindex="-1">删除分区 <a class="header-anchor" href="#删除分区" aria-hidden="true">#</a></h2><h4 id="请求url-2" tabindex="-1">请求URL <a class="header-anchor" href="#请求url-2" aria-hidden="true">#</a></h4><ul><li><code>http://域名/api/v1/partition/{id}</code></li></ul><h4 id="请求方式-2" tabindex="-1">请求方式 <a class="header-anchor" href="#请求方式-2" aria-hidden="true">#</a></h4><ul><li>DELETE</li></ul><h4 id="请求头-1" tabindex="-1">请求头 <a class="header-anchor" href="#请求头-1" aria-hidden="true">#</a></h4><ul><li><code>&quot;content-type&quot;: &quot;application/json&quot;,</code></li><li><code>Authorization&#39;: access_token</code></li></ul><h4 id="参数-1" tabindex="-1">参数 <a class="header-anchor" href="#参数-1" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">必选</th><th style="text-align:left;">类型</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:left;">id</td><td style="text-align:left;">是</td><td style="text-align:left;">int</td><td>分区id</td></tr></tbody></table><h4 id="返回示例-2" tabindex="-1">返回示例 <a class="header-anchor" href="#返回示例-2" aria-hidden="true">#</a></h4><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">code</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">data</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">msgsage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h4 id="备注-1" tabindex="-1">备注 <a class="header-anchor" href="#备注-1" aria-hidden="true">#</a></h4><p>需要超级管理员权限</p>`,34),o=[e];function p(r,c,i,D,d,F){return a(),n("div",null,o)}const C=s(t,[["render",p]]);export{h as __pageData,C as default};

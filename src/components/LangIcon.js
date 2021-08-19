import IconActionScript from "/src/assets/icons-lang/actionscript.svg"
import IconAngular from "/src/assets/icons-lang/angular.svg"
import IconASP from "/src/assets/icons-lang/asp.svg"
import IconAssembly from "/src/assets/icons-lang/assembly.svg"
import IconAzure from "/src/assets/icons-lang/azure.svg"
import IconC from "/src/assets/icons-lang/c.svg"
import IconCobol from "/src/assets/icons-lang/cobol.svg"
import IconCPP from "/src/assets/icons-lang/cpp.svg"
import IconCSharp from "/src/assets/icons-lang/csharp.svg"
import IconCSS from "/src/assets/icons-lang/css.svg"
import IconDelphi from "/src/assets/icons-lang/delphi.svg"
import IconFlutter from "/src/assets/icons-lang/flutter.svg"
import IconFortran from "/src/assets/icons-lang/fortran.svg"
import IconGo from "/src/assets/icons-lang/go.svg"
import IconHTML from "/src/assets/icons-lang/html.svg"
import IconJava from "/src/assets/icons-lang/java.svg"
import IconJavaScript from "/src/assets/icons-lang/javascript.svg"
import IconMakefile from "/src/assets/icons-lang/makefile.svg"
import IconMongo from "/src/assets/icons-lang/mongo.svg"
import IconMySQL from "/src/assets/icons-lang/mysql.svg"
import IconNode from "/src/assets/icons-lang/node.svg"
import IconObjectiveC from "/src/assets/icons-lang/objectivec.svg"
import IconPerl from "/src/assets/icons-lang/perl.svg"
import IconPHP from "/src/assets/icons-lang/php.svg"
import IconPython from "/src/assets/icons-lang/python.svg"
import IconRuby from "/src/assets/icons-lang/ruby.svg"
import IconScala from "/src/assets/icons-lang/scala.svg"
import IconShell from "/src/assets/icons-lang/shell.svg"
import IconSolidity from "/src/assets/icons-lang/solidity.svg"
import IconSvelte from "/src/assets/icons-lang/svelte.svg"
import IconSwift from "/src/assets/icons-lang/swift.svg"
import IconTypeScript from "/src/assets/icons-lang/typescript.svg"
import IconVue from "/src/assets/icons-lang/vue.svg"
import IconXML from "/src/assets/icons-lang/xml.svg"

const LangIcon = (props) => {
  return (
    <>
      {
        {
          ActionScript: <IconActionScript />,
          Angular: <IconAngular />,
          ASP: <IconASP />,
          Assembly: <IconAssembly />,
          Azure: <IconAzure />,
          C: <IconC />,
          Cobol: <IconCobol />,
          "C++": <IconCPP />,
          "C#": <IconCSharp />,
          CSS: <IconCSS />,
          Delphi: <IconDelphi />,
          Flutter: <IconFlutter />,
          Fortran: <IconFortran />,
          Go: <IconGo />,
          HTML: <IconHTML />,
          Java: <IconJava />,
          JavaScript: <IconJavaScript />,
          Makefile: <IconMakefile />,
          Mongo: <IconMongo />,
          MySQL: <IconMySQL />,
          Node: <IconNode />,
          "Objective-C": <IconObjectiveC />,
          Perl: <IconPerl />,
          PHP: <IconPHP />,
          Python: <IconPython />,
          Ruby: <IconRuby />,
          Scala: <IconScala />,
          Shell: <IconShell />,
          Solidity: <IconSolidity />,
          Svelte: <IconSvelte />,
          Swift: <IconSwift />,
          TypeScript: <IconTypeScript />,
          Vue: <IconVue />,
          XML: <IconXML />,
          default: <></>,
        }[props.name]
      }
    </>
  )
}

export default LangIcon

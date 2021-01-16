package MyRunner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "classpath:Features", 
				tags = "@CadastroUsuario",
				glue = {"StepDefinitions"},
				plugin = {"pretty","html:target/report-html" , "json:target/report.json"},
				monochrome = true) 
public class TestRunner {
	
	
}


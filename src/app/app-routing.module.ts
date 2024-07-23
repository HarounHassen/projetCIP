import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AuthentificationPageComponent } from './authentification-page/authentification-page.component';

import { ReinitialisationMDPComponent } from './reinitialisation-mdp/reinitialisation-mdp.component';

import { CodeVerificationComponent } from './code-verification/code-verification.component';

import { ProfileComponent } from './profile/profile.component';

import { ParametresComponent } from './parametres/parametres.component';

import { ModifierSiteComponent } from './modifier-site/modifier-site.component';

import { AjoutSiteComponent } from './ajout-site/ajout-site.component';

import { ModifierPlantComponent } from './modifier-plant/modifier-plant.component';

import { AjouterPlantComponent } from './ajouter-plant/ajouter-plant.component';

import { ModifierSegmentComponent } from './modifier-segment/modifier-segment.component';

import { AjouterSegmentComponent } from './ajouter-segment/ajouter-segment.component';

import { ModifierLigneComponent } from './modifier-ligne/modifier-ligne.component';

import { AjouterLigneComponent } from './ajouter-ligne/ajouter-ligne.component';

import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';

import { DetailsIdeeComponent } from './details-idee/details-idee.component';

import { StructureComponent } from './structure/structure.component';

import { StructurePlantComponent } from './structure-plant/structure-plant.component';

import { StructureSegmentComponent } from './structure-segment/structure-segment.component';

import { LigneComponent } from './ligne/ligne.component';

import { UtilisateurComponent } from './utilisateur/utilisateur.component';

import { IdeesComponent } from './idees/idees.component';

import { ConfigurationApplicationComponent } from './configuration-application/configuration-application.component';


const routes: Routes = [
  {
    path:'',
    component: AuthentificationPageComponent 
  },
  {
    path:'reinitialisation-mdp',
    component: ReinitialisationMDPComponent    
  },
  { path: 'code-verification', 
    component: CodeVerificationComponent
   },
  { path: 'profile', 
    component: ProfileComponent 
  },
  { path: 'parametres', 
    component: ParametresComponent
  }
  ,
  { path: 'modifier-site', 
    component: ModifierSiteComponent
  },
  { path: 'ajout-site', 
    component: AjoutSiteComponent
  }
  ,
  { path: 'modifier-plant', 
    component: ModifierPlantComponent
  } ,
  { path: 'ajouter-plant', 
    component: AjouterPlantComponent
  },
  { path: 'modifier-segment', 
    component: ModifierSegmentComponent
  }
  ,
  { path: 'ajouter-segment', 
    component: AjouterSegmentComponent
  }
  ,
  { path: 'modifier-ligne', 
    component: ModifierLigneComponent
  }
  ,
  { path: 'ajouter-ligne', 
    component: AjouterLigneComponent
  }
  , 
  { path: 'ajouter-utilisateur', 
    component: AjouterUtilisateurComponent
  }
  , 
  { path: 'details-idee', 
    component: DetailsIdeeComponent
  }
  , 
  { path: 'structure', 
    component: StructureComponent
  }
  , 
  { path: 'structure-plant', 
    component: StructurePlantComponent
  }
  , 
  { path: 'structure-segment', 
    component: StructureSegmentComponent
  }
  , 
  { path: 'ligne', 
    component: LigneComponent
  }
  , 
  { path: 'utilisateur', 
    component: UtilisateurComponent
  }
  , 
  { path: 'idees', 
    component: IdeesComponent
  },
  { path: 'configuration-application', 
    component: ConfigurationApplicationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
